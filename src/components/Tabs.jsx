export default function Tabs({ chidren, buttons }) {
    return ( 
        <>
            <menu>{buttons}</menu>
            {chidren}
        </>
    );
}