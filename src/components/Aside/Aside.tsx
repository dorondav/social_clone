import Item from "../Item/Item";
import PropTypes from "prop-types";
import { HiMiniHome } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { IoMdNotifications, IoIosMail, IoIosPerson } from "react-icons/io";

interface Props {
  props?: string;

  // any props that come into the component
}
const Aside = ({ props }: Props) => {
  return (
    <aside className="bg-green-300 flex flex-col w-64">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white space-y-2 font-medium ">
        <Item>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <HiMiniHome size={24} className="text-gray-400" />
            <span className="ml-3">Home</span>
          </a>
        </Item>
        <Item>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <ImSearch size={24} className="text-gray-400" />
            <span className="ml-3">Search</span>
          </a>
        </Item>
        <Item>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IoMdNotifications size={24} className="text-gray-400" />
            <span className="ml-3">Notifications</span>
          </a>
        </Item>
        <Item>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IoIosMail size={24} className="text-gray-400" />
            <span className="ml-3">Messages</span>
          </a>
        </Item>
        <Item>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IoIosPerson size={24} className="text-gray-400" />
            <span className="ml-3">Profile</span>
          </a>
        </Item>
        <button className="=  text-center	 w-4/5 items-center bg-blue-500 p-2 text-gray-900 rounded-3xl	 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600 ">
          Post
        </button>
      </div>
    </aside>
  );
};

Aside.propTypes = {};

export default Aside;
