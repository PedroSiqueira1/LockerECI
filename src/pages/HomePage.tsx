import React, { useState, useEffect  } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importe o estilo do componente
import { useNavigate } from "react-router-dom";





// import imagegridsection
import ImageGridSection from "../components/ImageGrid/ImageGrid";
import ChooseLockerSection from "../components/ChooseLockerSection/ChooseLockerSection";
import LockSection from "../components/LockSection/LockSection";
// create locker array with 7 lockers

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [chosenLocker, setChosenLocker] = useState<number | undefined>();
    const [userName, setUserName] = useState<string>("");
    const [returnDate, setReturnDate] = useState<Date | null>(null); // Tipo Date para manipulação interna
    const [returnDateString, setReturnDateString] = useState<string>(""); // Tipo string para exibição no campo de input
    const [userNamesArray, setUserNamesArray] = useState<string[]>(Array(7).fill(""));
    const [returnDatesArray, setReturnDatesArray] = useState<string[]>(Array(7).fill(""));
    const [showOccupiedMessage, setShowOccupiedMessage] = useState<boolean>(false);


    const handleConfirmChoice = () => {
        // Verifica se o armário foi escolhido antes de salvar as informações
        if (chosenLocker !== undefined && chosenLocker !== 0) {
            // Verifica se os campos de texto não estão vazios
            if (userName.trim() !== "" && returnDate !== null) {

                if (userNamesArray[chosenLocker - 1] !== "") {
                    // O locker já está ocupado
                    setShowOccupiedMessage(true);
                    setTimeout(() => {
                        setShowOccupiedMessage(false);
                    }, 4000); // 4000 milissegundos = 4 segundos
                    return;
                }

                // Atualiza o nome no array correspondente ao locker escolhido
                setUserNamesArray((prevNames) => {
                    const updatedNames = [...prevNames];
                    updatedNames[chosenLocker - 1] = userName.trim(); // Subtrai 1 para corresponder ao índice do array
                    return updatedNames;
                });
    
                // Atualiza o array de datas de devolução
                setReturnDatesArray((prevDates) => {
                    const updatedDates = [...prevDates];
                    updatedDates[chosenLocker - 1] = returnDate!.toISOString();
                    return updatedDates;
                });
    
                // Limpa o texto das caixas de texto
                setUserName("");
                setReturnDate(null);
                setReturnDateString("");
                
                
                // Define chosenLocker como 0
                setChosenLocker(undefined);

            } 
        }
    };

    useEffect(() => {
        // Esconde a mensagem após 4 segundos
        const timeoutId = setTimeout(() => {
            setShowOccupiedMessage(false);
        }, 4000);

        // Limpa o timeout quando o componente é desmontado
        return () => clearTimeout(timeoutId);
    }, [showOccupiedMessage]);

    console.log("User Names Array:", userNamesArray);
    console.log("Return Dates Array:", returnDatesArray);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#E5E5E5",
                minHeight: "100vh",
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
                Bem-vindo ao LockerECI!
            </p>

            {chosenLocker !== undefined && (
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    {/* Nome do usuário */}
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        style={{ width: "300px", marginBottom: "10px" }}
                    />

                     {/* Data de devolução */}
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => {
                            setReturnDate(date as Date);
                            setReturnDateString((date as Date).toLocaleDateString());
                        }}
                        placeholderText="Data de Devolução"
                        dateFormat="dd/MM/yyyy"
                    />

                    {showOccupiedMessage && (
                        <p style={{ color: "red", marginBottom: "10px" }}>
                            Este locker já está ocupado. Por favor, escolha outro locker.
                        </p>
                    )}

                    {/* Botão para confirmar a escolha do armário */}
                    <button
                        onClick={handleConfirmChoice}
                        style={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginBottom: "10px"
                        }}
                    >
                        Confirmar Escolha
                    </button>
                </div>
            )}

            {/* ImageGridSection, LockSection, ChooseLockerSection */}
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <ImageGridSection state={chosenLocker} setState={setChosenLocker} />
            </div>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <LockSection state={chosenLocker} setState={setChosenLocker} userNamesArray={userNamesArray} returnDatesArray={returnDatesArray}  />
            </div>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <ChooseLockerSection state={chosenLocker} />
            </div>
        </div>
    );
};



export default HomePage;
