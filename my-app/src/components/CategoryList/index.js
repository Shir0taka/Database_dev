import { useContext } from "react";
import { categoriesContext } from "../../contexts/CategoriesContext";
import { useNavigate } from 'react-router-dom';

import { Wrapper, CategoryItem } from './styles';
import styles from './styles.module.css'

const CategoryList = (props) => {
    const navigate = useNavigate();
    const categories = useContext(categoriesContext);

    const handleCategoryClick = (catId) => {
        props.getCategory(catId);
        if (categories.filter(e => e.id == catId).length > 0)
            navigate(`/categories/${catId}`);
        else
            navigate(`/`);
    }

    return(
        <div className={styles.wrapper}>
            <CategoryItem notSpecified onClick={(e) => handleCategoryClick(0)}>All</CategoryItem>
            {
                categories.map(category => (
                    <CategoryItem
                        key={category.id}
                        onClick={(e) => handleCategoryClick(category.id)}>
                            {category.name}
                    </CategoryItem>
                ))
            }
        </div>
    )
}

export default CategoryList;