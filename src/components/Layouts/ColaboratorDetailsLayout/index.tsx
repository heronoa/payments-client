import { IProjectDataType, IUserDataType } from "@/@types";
import TinyItem from "@/components/UI/Items/TinyItem";
import { useProjects } from "@/hooks/useProjects";
import { formatItem, translateItemKeys } from "@/services/format";
import { FaUserAlt } from "react-icons/fa";

interface Props {
  user: IUserDataType;
}

const ColaboratorDetailsLayout = ({ user }: Props) => {
  const { allProjects } = useProjects();

  const findProject = (id: String) => {
    return allProjects.find(e => e.id === id);
  };

  const renderProjects = (e: string | IUserDataType, index: number) => {
    let value: string | IUserDataType = e;

    return (
      <div key={index}>
        {value?.name}
        {value?.occupation.map((e, index2) => {
          return <TinyItem key={index2} value={e} />;
        })}
      </div>
    );
  };

  if (!user) {
    return <div className="dark:text-white">Projeto não encontrado</div>;
  }
  return (
    <section className="flex justify-start gap-4 items-center flex-col px-12 shadow-lg min-h-[75vh] dark:text-white">
      <div className="mx-12 shadow-lg p-12 rounded-lg flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-[80%]">
        <div className="w-full">
          <div className="flex">
            <FaUserAlt className="h-24 w-24" />
            <h3>{user?.name}</h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly gap-4 w-full border-t-gray-300 border-t mt-4">
            {Object.entries(user).map(([objKey, objValue], index) => {
              if (["uid", "projects", "occupation"].includes(objKey))
                return null;

              console.log({ objKey, objValue });

              return (
                <div key={index}>
                  <span className="font-semibold mr-2">
                    {translateItemKeys(objKey as any)}:
                  </span>
                  <div className="flex flex-wrap">
                    {objKey === "occupation"
                      ? objValue.map((e: any, index: any) => {
                          return <TinyItem key={index} value={e} />;
                        })
                      : formatItem(objValue, objKey as any)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-12 shadow-lg p-12 rounded-lg flex flex-col justify-center items-center gap-4 w-full md:w-[80%]">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly gap-4 w-full">
          {Object.entries({
            projects: user.projects,
            occupation: user.occupation,
          }).map(([objKey, objValue], index) => {
            return (
              <div key={index}>
                <span className="font-semibold mr-2">
                  {translateItemKeys(objKey as any)}:
                </span>
                <div
                  className={`${
                    objKey === "projects" ? "flex-col" : ""
                  }  flex flex-wrap`}
                >
                  {(objValue as string[]).map((e, index) => {
                    let value: string | IProjectDataType = e;
                    if (objKey === "projects") {
                      value = findProject(e) || e;
                    }
                    if (typeof value === "string") {
                      return <TinyItem key={index} value={value} />;
                    }
                    return <div key={index}>{value?.name}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-12 shadow-lg p-12 rounded-lg flex flex-col justify-center items-center gap-4 w-full md:w-[80%]">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly gap-4 w-full">
          {Object.entries({
            projects: user.projects,
            occupation: user.occupation,
          }).map(([objKey, objValue], index) => {
            return (
              <div key={index}>
                <span className="font-semibold mr-2">
                  {translateItemKeys(objKey as any)}:
                </span>
                <div
                  className={`${
                    objKey === "projects" ? "flex-col" : ""
                  }  flex flex-wrap`}
                >
                  {(objValue as string[]).map((e, index) => {
                    let value: string | IProjectDataType = e;
                    if (objKey === "projects") {
                      value = findProject(e) || e;
                    }
                    if (typeof value === "string") {
                      return <TinyItem key={index} value={value} />;
                    }
                    return <div key={index}>{value?.name}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-end mt-4 border-t-gray-300 border-t pt-4">
          <button className="btn !max-w-[200px] text-white !bg-red-600 hover:!bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColaboratorDetailsLayout;
