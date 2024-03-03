export const fileExtensionValidator = (file: File, type: string) => {
  const extension = removeName(file.name);
  switch (type) {
    case "profImg":
      if ("jpg,jpeg,png".indexOf(extension) == -1) {
        return false;
      } else {
        return true;
      }
      break;
  }
};

const removeName = (name: string) => {
  const nameSplit = name.split(".");
  if (nameSplit[nameSplit.length - 1] == undefined) {
    return "";
  } else {
    return nameSplit[nameSplit.length - 1];
  }
};
