import { CardMangaContainer } from "./styles";

type Props = {
  title: string;
  link: string;
};

export function CardManga({ title, link }: Props) {
  return (
    <CardMangaContainer>
      <img src={link} alt={title} />
      <strong>{title}</strong>
    </CardMangaContainer>
  );
}
