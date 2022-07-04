import React from 'react';

interface ISectionWrapperProps {
    id?: string;
    children?: React.ReactNode;
}

export const SectionWrapper = ({ id, children }: ISectionWrapperProps) => {
    return <section id={id}>{children}</section>;
};
