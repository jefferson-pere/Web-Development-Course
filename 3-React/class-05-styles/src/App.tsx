import { CardManga } from "./components/cardManga";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      [1]
      <CardManga
        title={"One Piece"}
        link={
          "https://mangaonline.biz/wp-content/uploads/2022/08/One-Piece-185x278.jpg"
        }
      />
    </Container>
  );
}
