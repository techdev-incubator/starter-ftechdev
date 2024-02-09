import * as React from 'react';

type Props = React.PropsWithChildren<{
    filepath: string | React.ReactNode
}>

export function Card({ children, filepath }: Props): JSX.Element {
    return (
        <div
            style={{
                borderRadius: 8,
                background: "#eee",
                border: "1.5px solid #ccc",
                position: "relative",
                minHeight: 80,
                paddingInline: 8,
                paddingTop: 40,
                paddingBottom: 8,

            }}
        >
            <div
                style={{
                    borderRadius: 8,
                    background: "#ddd",
                    border: "1.5px solid #bbb",
                    position: "absolute",
                    left: 8,
                    top: -14,
                    height: 20,
                    paddingInline: 8,
                    paddingBlock: 4,
                    minWidth: 80,
                    fontWeight: 600,
                    color: "#2a2a2a"
                }}
            >
                {filepath}
            </div>
            {children}
        </div>
    );
}