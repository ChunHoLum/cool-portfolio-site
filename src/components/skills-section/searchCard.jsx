import React from 'react';
import { Rate } from 'antd';
// import { LikeOutlined } from '@ant-design/icons';

const SearchCard = (props) => {
  const { title, skills } = props.skill;

  return (
    <div className="search__card"  >
      <div className="search__card__title">
        {title}
      </div>
      {skills.map((skill, index) =>
        <div className="search__card__skills" key={index}>
          <span>
            {skill.name}
          </span>
          <span>
            <Rate
              disabled
              allowHalf
              defaultValue={skill.rating}
              style={{ color: "#3097FF", fontSize: "1rem" }}
            />
          </span>
        </div>
      )}
      {skills.length > 0 ?
        <div className="search__card__description" >
          <span>
          </span>
        </div>
        :
        <div className="search__card__description" >
          <span>
            Cannot find what you want? Contact me directly !
          </span>
        </div>
      }


    </div>
  )
}


export default SearchCard;
