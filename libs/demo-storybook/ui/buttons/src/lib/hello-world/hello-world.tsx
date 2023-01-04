/* eslint-disable-next-line */
export interface HelloWorldProps {}

export function HelloWorld(props: HelloWorldProps) {
  return (
    <div className="text-orange-800 bg-gray-200 rounded-lg px-4 py-2">
      <h1>Welcome to HelloWorld!</h1>
    </div>
  );
}

export default HelloWorld;
