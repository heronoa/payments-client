import { IDateObj, IFilterKeyOption, IFormatItem } from "@/@types";

export const capitalize = (str: string) => {
  if (str === "") return "";

  const strCapitalize = str.charAt(0).toUpperCase() + str.slice(1);
  return strCapitalize;
};

export const getAge = (strDate: string): string | number => {
  return (
    parseInt(new Date(Date.now()).toISOString().split("T")[0].split("-")[0]) -
    +strDate.split("/")[2]
  );
};

export const formatItem = (
  value: IFormatItem,
  key?: IFilterKeyOption | "age",
): string | number | undefined => {
  if (key) {
    if (key === "birthday") {
      return new Date((value as IDateObj)?.seconds * 1000)
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    }
    if (key === "age") {
      return getAge(
        new Date((value as IDateObj)?.seconds * 1000)
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/"),
      );
    }
  }

  if (typeof value === "string") {
    return value;
  }

  return;
};

export const parseCamelCase = (camelStr: string): string => {
  return capitalize(camelStr.split(/(?=[A-Z])/).join(" "));
};

export const translateItemKeys = (
  itemKey: IFilterKeyOption | "age",
): string | undefined => {
  return (
    {
      name: "Nome",
      deadline: "Prazo",
      description: "Descrição",
      stack: "Tecnologias",
      teamUids: "",
      startDate: "Data de Inicio",
      permissionLevel: "Nivel de Permissões",
      occupation: "Área de Atuação",
      projects: "Projetos",
      birthday: "Data de Nascimento",
      age: "Idade",
    }?.[itemKey] || undefined
  );
};
