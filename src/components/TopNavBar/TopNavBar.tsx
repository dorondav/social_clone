import Item from "../Item/Item";

interface TopNavBarProps {
  className?: string;
}

const TopNavBar = ({ ...props }: TopNavBarProps) => {
  return (
    <nav className="bg-red-400 flex">
      <Item>1 items</Item>
      <Item>2 items</Item>
      <Item>3 items</Item>
    </nav>
  );
};

export default TopNavBar;
