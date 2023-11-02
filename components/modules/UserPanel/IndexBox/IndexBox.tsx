import { Link } from 'react-router-dom';

// type Props = {}

const IndexBox = ({title, href}) => {
    return (
        <div className="col-4">
          <Link to={href} className="main__link">
            {title}
          </Link>
        </div>
      );
}

export default IndexBox