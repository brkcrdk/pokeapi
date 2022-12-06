import { HTMLAttributes } from 'react';

interface ImageProps extends HTMLAttributes<HTMLPictureElement> {
  pokemonIndex: string | number;
  customImage?: string;
}

function PokemonImage({ pokemonIndex, customImage, ...props }: ImageProps) {
  const defaultImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  return (
    <picture {...props}>
      <source
        srcSet={customImage || defaultImageUrl}
        type="image/webp"
        className="w-full max-w-md"
      />
      <img
        srcSet={customImage || defaultImageUrl}
        alt="Landscape picture"
        className="w-full max-w-md"
      />
    </picture>
  );
}
export default PokemonImage;
