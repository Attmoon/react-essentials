export default function Tabs({ chidren, buttons, ButtonsContainer }) {
    // const ButtonsContainer = buttonsContainer;
    return ( 
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {chidren}
        </>
    );
}