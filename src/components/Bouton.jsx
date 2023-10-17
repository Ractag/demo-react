function Bouton({
  texte,
  clicked,
  disabled,
  backgroundColor = "green",
  color = "white",
}) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: disabled ? "yellow" : color,
      }}
      disabled={disabled}
      onClick={clicked}
    >
      {texte}
    </button>
  );
}

export default Bouton;
