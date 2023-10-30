import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// import imagegridsection
import ImageGridSection from "../components/ImageGrid/ImageGrid";
import ChooseLockerSection from "../components/ChooseLockerSection/ChooseLockerSection";

// create locker array with 7 lockers
const initialInUseArray = [false, false, false, false, false, false, false];

const HomePage: React.FC = () => {
    const navigate = useNavigate();


    const [chosenLocker, setchosenLocker] = useState<number | undefined>();

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#E5E5E5",
                minHeight: "100vh", // Defina a altura mínima para preencher toda a tela
            }}
        >
            <p
                style={{
                    fontWeight: 600,
                    fontSize: 40,
                    color: "#6D6D6D",
                    marginTop: 54,
                    fontFamily: "Inter",
                }}
            >
                Bem vindo ao LockerECI!
            </p>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <ImageGridSection state={chosenLocker} setState={setchosenLocker} />
            </div>
                 
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <ChooseLockerSection state={chosenLocker}/>
            </div>
            


        </div>
    );
};

export default HomePage;
