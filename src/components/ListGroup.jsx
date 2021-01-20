import React from 'react';

const ListGroup = (props) => {
  const { groups, selectedGroup, onGroupSelect } = props;
  return (
    <ul className="list-group">
      {groups.map((group, index) => {
        return (
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => onGroupSelect(group)}
            className={
              group === selectedGroup
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={index}
          >
            {group}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
