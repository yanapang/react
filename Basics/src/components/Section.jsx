export default function Section ({title, children, ...props}) {
    {/* ...props allows scalable prop values */}
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}