import React from "react";

import locker from "../../assets/locker.svg";

interface ImageGridProps {
    state: number | undefined;
    setState: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ImageGridSection: React.FC<ImageGridProps> = ({ state, setState }) => {
    const handleClick = (index: number) => {
        if (state === index) {
            setState(undefined);
            return;
        }

        setState(index)
    };

    // Estilos comuns para as imagens
    const commonImageStyle = {
        width: "130px",
        height: "200px",
        cursor: "pointer",
    };

    return (
        <div>
            <img onClick={() => handleClick(1)} src={locker} style={{ opacity: state === 1 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(2)} src={locker} style={{ opacity: state === 2 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(3)} src={locker} style={{ opacity: state === 3 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(4)} src={locker} style={{ opacity: state === 4 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(5)} src={locker} style={{ opacity: state === 5 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(6)} src={locker} style={{ opacity: state === 6 ? 1 : 0.4, ...commonImageStyle }} />
            <img onClick={() => handleClick(7)} src={locker} style={{ opacity: state === 7 ? 1 : 0.4, ...commonImageStyle }} />
        </div>    );
};

export default ImageGridSection;