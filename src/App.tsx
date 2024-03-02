import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-700 p-[150px] item-center">
        <div className="bg-white m-auto w-full max-w-[600px] rounded-md p-4">
          <h1 className="text-3xl pb-3 text-center font-bold">
            Chores ToDo List
          </h1>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
