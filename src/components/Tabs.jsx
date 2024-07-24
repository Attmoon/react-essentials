export default function Tabs({ chidren, buttons, ButtonsContainer = 'menu' }) {
    // const ButtonsContainer = buttonsContainer;
    return ( 
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {chidren}
        </>
    );
}