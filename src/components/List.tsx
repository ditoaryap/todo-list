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
    <div className="flex justify-between my-2 border-b-2 pb-2 px-3">
      <div className="flex space-x-4">
        <input
          type="checkbox"
          checked={done}
          className="w-4"
          onClick={onStatusChange}
        />
        <div className="text-bold">{title}</div>
      </div>
      <div
        onClick={onClick}
        className="cursor-pointer text-red-500/60 border-2 border-red-500/60 rounded-md px-2"
      >
        hapus
      </div>
    </div>
  );
};
