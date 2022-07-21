import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={5} rowHeight={220}>
      {images.map((imagen) => (
        <ImageListItem key={imagen}>
          <img
            src={`${imagen}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="imagen de la Nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
