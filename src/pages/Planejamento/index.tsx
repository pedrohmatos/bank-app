import { useState } from "react";
// import hook

import InputBox from "../../components/InputBox";
import ListItem from "../../components/ListItem";
// import component

import EventType from "../../types/EventType";
// import type

import StyledMain from "./StyledMain";
import StyledButton from "../../styles/shared/StyledButton";
//import styled components


type ItemType = {
    id: number;
    value: string;
    data: string;
};

const Planejamento = () => {
    const [list, setList] = useState<ItemType[]>([]);

    const [formValues, setFormValues] = useState<ItemType>({
        id: 0,
        value: "",
        data: ""
    });

    const handleChange = (evTarget: EventTarget & EventType) => {
        const inputIdentifier: string | null = evTarget.getAttribute("id");

        if (inputIdentifier === "destino") {
            setFormValues((prev) => {
                return { ...prev, value: evTarget.value };
            });
        } else if (inputIdentifier === "agendamento") {
            setFormValues((prev) => {
                return { ...prev, data: evTarget.value }
            })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setList((prev) => {
            return [...prev, { ...formValues }];
        });

        setFormValues((prev) => {
            return (
                {
                    id: prev.id + 1,
                    value: "",
                    data: ""
                }
            );
        });
    };

    const handleDelete = (ev: number) => {
        const filteredList = list.filter((obj) => {
            return obj.id !== ev;
        });

        setList(filteredList);
    };

    return (
        <StyledMain>
            <h2>Planejamento</h2>
            <form method="get" onSubmit={handleSubmit}>
                <InputBox
                    value={formValues.value}
                    inputChange={handleChange}
                    inputId="destino"
                    inputType="text"
                    inputPlaceholder="Frutas e legumes..."
                />
                <InputBox
                    value={formValues.data}
                    inputChange={handleChange}
                    inputId="agendamento"
                    inputType="date"
                />
                <StyledButton as={"button"} type="submit">
                    Anotar
                </StyledButton>
            </form>
            <section>
                {
                    list.map((obj) => {
                        return <ListItem
                            destino={obj.value}
                            date={obj.data}
                            deletar={handleDelete}
                            id={obj.id}
                            key={obj.id}
                        />
                    })
                }
            </section>
        </StyledMain>
    )
};

export default Planejamento