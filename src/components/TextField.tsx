
interface Props {
    id : string;
    label:string
    error?:string
    inputProps?: unknown
    type?:string
}


const TextField = (props: Props) => {
  return (
    <section className="flex flex-col ">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type?? "text"}
        className="border h-10 p-2 rounded-lg shadow-sm focus:shadow-inner focus:outline-none"
        {...(props.inputProps ?? {})}
      />
      {props.error ? (
        <span className="text-red-500 text-xs font-normal">
          {props.error as string}
        </span>
      ) : null}
    </section>
  );
}

export default TextField