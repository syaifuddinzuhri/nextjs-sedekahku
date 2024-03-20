export function humanizeString(str: string): string {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, m => m.toUpperCase());
}

export const isObject = (obj: Record<string, unknown>): boolean => obj && obj.constructor.name === "Object";

export const flattenObject = (
  data: never[] | undefined,
  children: string | undefined = "children",
  key: string | undefined = "code"
): Record<string, unknown> => {
  if (data) {
    return data?.reduce((obj, item) => {
      if (item[children]) {
        return Object.assign(obj, {
          [item[key]]: { ...flattenObject(item[children]) },
        });
      }

      return Object.assign(obj, { [item[key]]: item[key] });
    }, {});
  }

  return {};
};

export function mergeArray(arr: any[]): any[] {
  return Object.values(
    [...arr].reduce((result, { id, ...rest }) => {
      // eslint-disable-next-line no-param-reassign
      result[id] = {
        ...(result[id] || {}),
        id,
        ...rest,
      };

      return result;
    }, [])
  );
}

export async function validateImageSizeDimension(file: File): Promise<boolean> {
  const fileSize = file.size / 1024 / 1024;
  const reader = new FileReader();
  const promise = new Promise<boolean>((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = img => {
      const image = new Image();
      image.src = img.target ? (img.target.result as string) : "";
      image.onload = function onLoad() {
        if (fileSize > 1) {
          return resolve(false);
        }
        if (image.width < 100 || image.height < 100) {
          return resolve(false);
        }
        if (image.width > 1000 || image.height > 1000) {
          return resolve(false);
        }

        return resolve(true);
      };
    };
    reader.onerror = reject;
    reader.onabort = reject;
  });

  return await promise;
}

export async function validateImageUpload(files: FileList | null): Promise<boolean> {
  if (files?.length != null) {
    const checkImage = await validateImageSizeDimension(files[0]);

    return checkImage;
  }

  return false;
}

export function formatUniqueArray<T = never[]>(value: T, key: string) {
  if (Array.isArray(value)) {
    const [first, second] = key.split(".");
    const arrayUniqueByKey = Array.from(new Map(value.map(item => [item[first][second], item])).values());

    return arrayUniqueByKey;
  }

  return value;
}

/**
 * @param innerError {object} error.inner from yup catch
 */
export function generateValidationErrors<T = any>(innerError: any): T {
  return innerError.reduce(
    (acc: any, error: any) => ({
      ...acc,
      [error.path]: {
        error: true,
        message: error.message,
      },
    }),
    {}
  );
}
