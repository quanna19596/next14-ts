export const urlSafe = (url: string): string => {
  return url
    .replace(/[^a-zA-Z0-9- ]/g, '')
    .replace(/\s\s+/g, ' ')
    .replace(/ /g, '-')
    .toLowerCase();
};

export const downloadURL = async (url: string, fileName: string): Promise<void> => {
  const image = await fetch(url);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement('a');
  link.href = imageURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadFile = (data: string, fileName: string): void => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.removeChild(link);
};
