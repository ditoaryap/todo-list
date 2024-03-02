interface hjhjh {
  title: string;
  onClick: any;
  done: boolean;
  onStatusChange: any;
}
export const List: React.FC<hjhjh> = ({
  title,
  onClick,
  done,
  onStatusChange,
}) => {
  return (
    <div className="flex justify-between items-center my-2 border-b-2 pb-2 px-3 text-middle mx-auto">
      <div className="flex space-x-4">
        <input
          type="checkbox"
          checked={done}
          className="w-4"
          onClick={onStatusChange}
        />
        <div className="text-bold mx-auto">{title}</div>
      </div>
      <button
        onClick={onClick}
        className="cursor-pointer text-red-500 border-2 border-red-500 hover:bg-red-200 rounded-md px-3 py-2"
      >
        hapus
      </button>
    </div>
  );
};
