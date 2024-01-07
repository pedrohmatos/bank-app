import StyledInputBox from "../../styles/shared/StyledInputBox"

type InputBoxProps = {
    inputChange: (e: EventTarget & HTMLInputElement) => void;
    value: number | string; // atenção
    inputType: string;
    inputId: string;
    inputPlaceholder?: string;
};

const InputBox = ({ inputChange, value, inputType, inputId, inputPlaceholder }: InputBoxProps): JSX.Element => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventTarget = e.target;
        inputChange(eventTarget);
    };

    return (
        <>
            <StyledInputBox>
                <label htmlFor={inputId}>{inputId}</label>
                <input
                    onChange={handleChange}
                    value={value ? value : ""}
                    className="campo-input"
                    type={inputType}
                    id={inputId}
                    placeholder={inputPlaceholder}
                    step={inputType === "number" ? "0.1" : ""}
                    min={inputType === "number" ? "0" : ""}
                    required
                />
            </StyledInputBox>
        </>
    )
}

export default InputBox