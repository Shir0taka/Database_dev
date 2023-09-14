import { Wrapper, CategoryItem } from './styles';

const CategoryList = (props) => {
    const categories = props.categories;

    const handleCategoryClick = (catId) => {
        props.getCategory(catId);
    }

    return(
        <Wrapper>
            <CategoryItem onClick={(e) => handleCategoryClick(0)}>All</CategoryItem>
            {
                categories.map(category => (
                    <CategoryItem
                        key={category.id}
                        onClick={(e) => handleCategoryClick(category.id)}>
                            {category.name}
                    </CategoryItem>
                ))
            }
        </Wrapper>
    )
}

export default CategoryList;