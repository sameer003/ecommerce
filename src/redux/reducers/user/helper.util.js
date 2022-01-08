export function addItemToCart(list, item){
    const existingItem = list.filter(cartItem =>  cartItem.id === item.id);
    if(existingItem.length){
        return [...(list.filter(cartItem =>  cartItem.id !== item.id)), {...existingItem[0], quantity:existingItem[0].quantity+1 }]
    } else{
        return [...list, {...item, quantity:1}]
    }
}

export function updateQuantity(list, id, qty){
    const existingItem = list.find(cartItem =>  cartItem.id === id);
    return [...(list.filter(cartItem =>  cartItem.id !== id)), {...existingItem, quantity:Number(qty)}]
}