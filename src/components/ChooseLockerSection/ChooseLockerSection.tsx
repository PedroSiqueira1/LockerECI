import React from "react";

const ChooseLockerSection: React.FC<{ state: number | undefined; }> = ({ state }) => {

    if (state === undefined) {
        return (
            <div style={{
                width: "700px",
                height: "150px",
                background: "#6A5D5D",
                borderRadius: "30px",
                position: "absolute",
                bottom: "150px",
                display: "flex",
                color: "#FFFFFF",
                fontSize: "80px",
                fontWeight: 300,
                fontFamily: "Inter",
                justifyContent: "center",
                alignItems: "center",
            }}>
                Escolha seu Locker
            </div>
        );
    } else {
        return null; // Não renderiza nada se state for diferente de 0
    }
};

export default ChooseLockerSection;
