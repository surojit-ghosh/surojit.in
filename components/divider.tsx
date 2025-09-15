import Container from "./container";

const Divider = () => {
    return (
        <Container className="!p-0">
            <div className="h-6 bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
        </Container>
    );
};

export default Divider;
