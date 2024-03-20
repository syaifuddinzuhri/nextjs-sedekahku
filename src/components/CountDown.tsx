import React, { useState, useEffect } from 'react';
import { Text } from "@chakra-ui/react";

type TimeLeft = {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownTimerProps = {
    targetDateTime?: string;
};

const calculateTimeLeft = (targetDateTime: string): TimeLeft => {
    const targetDate = new Date(targetDateTime);
    const now = new Date();

    targetDate.setHours(targetDate.getHours() - 7);

    const totalSeconds = Math.max(Math.floor((targetDate.getTime() - now.getTime()) / 1000), 0);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        total: totalSeconds,
        days,
        hours,
        minutes,
        seconds,
    };
};

const formatTwoDigits = (value: number) => {
    return value.toString().padStart(2, '0');
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateTime }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDateTime!));

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(targetDateTime!);
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDateTime]);

    return (
        <div>
            {timeLeft.total <= 0 ? (
                <>
                    <Text fontWeight="bold" fontFamily="Poppins" color="black">
                        Kadaluwarsa
                    </Text>
                </>
            ) : (
                <Text fontWeight="bold" fontFamily="Poppins" color="#35BC3E">
                    {formatTwoDigits(timeLeft.hours)}:{formatTwoDigits(timeLeft.minutes)}:{formatTwoDigits(timeLeft.seconds)}
                </Text>
            )}
        </div>
    );
};

export default CountdownTimer;
