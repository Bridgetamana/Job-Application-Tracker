import { Link } from "react-router-dom";

const DashboardCard = ({ to, icon: Icon, title, description }) => {
  return (
    <div>
      <Link
        to={to}
        className="block max-w-sm p-4 bg-white rounded-lg shadow-sm hover:shadow-lg h-full"
      >
        <span className="flex w-8 h-8 rounded-full bg-teal-light items-center justify-center text-teal-dark">
          <Icon />
        </span>
        <h5 className="mb-2 text-xl font-bold text-gray-dark">{title}</h5>
        <p className="text-gray">{description}</p>
      </Link>
    </div>
  );
};

export default DashboardCard;
