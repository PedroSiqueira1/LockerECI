import greenlock from "../../assets/greenlock.svg";
import redlock from "../../assets/redlock.svg";

interface LockSectionProps {
    state: number | undefined;
    setState: React.Dispatch<React.SetStateAction<number | undefined>>;
    userNamesArray: string[];
    returnDatesArray: string[];
}

const LockSection: React.FC<LockSectionProps> = ({ state, setState, userNamesArray, returnDatesArray }) => {
    const handleClick = (index: number) => {
        if (state === index) {
            setState(undefined);
            return;
        }

        setState(index);
    };

    const isLockerOccupied = (index: number) => {
        // Verifica se há um nome e uma data associados a este locker
        return userNamesArray[index - 1] !== "" && returnDatesArray[index - 1] !== "";
    };

    // Estilos comuns para as imagens
    const commonImageStyle = {
        width: "130px",
        height: "200px",
        cursor: "pointer",
    };

    return (
        <div>
            {Array.from({ length: 7 }, (_, index) => (
                <img
                    key={index}
                    src={isLockerOccupied(index + 1) ? redlock : greenlock}
                    style={{ opacity: state === index + 1 ? 1 : 0.4, ...commonImageStyle }}
                    onClick={() => handleClick(index + 1)}
                />
            ))}
        </div>
    );
};

export default LockSection;