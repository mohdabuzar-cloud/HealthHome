interface SectionLabelProps {
  children: string;
  centered?: boolean;
}

export function SectionLabel({ children, centered = false }: SectionLabelProps) {
  return (
    <p
      className={centered ? "text-center" : ""}
      style={{
        color: "#C49B3C",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        marginBottom: 12,
        fontFamily: "Inter, sans-serif"
      }}
    >
      {children}
    </p>
  );
}
