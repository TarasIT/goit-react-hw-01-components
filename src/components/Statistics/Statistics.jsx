import PropTypes from 'prop-types';
import {
  Data,
  DataFormat,
  DataItem,
  DataList,
  DataSection,
  Title,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <DataSection>
      {title && <Title>{title}</Title>}
      <DataList>
        {data.map(({ id, label, percentage }) => (
          <DataItem key={id}>
            <DataFormat>{label}</DataFormat>
            <Data>{percentage}</Data>
          </DataItem>
        ))}
      </DataList>
    </DataSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
