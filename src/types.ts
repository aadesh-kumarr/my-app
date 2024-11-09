declare module "tailwindcss/lib/util/flattenColorPalette" {
    type ColorValues = { [key: string]: string | ColorValues };
  
    const flattenColorPalette: (colors: ColorValues) => { [key: string]: string };
    export default flattenColorPalette;
  }
  