export interface ButtonStyle {
  background: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  iconSize: string;
  padding: string;
  margin: string;
}

export interface ButtonProps {
  style: ButtonStyle;
  text: string;
  requiredIcon: boolean;
  icon: string;
}
