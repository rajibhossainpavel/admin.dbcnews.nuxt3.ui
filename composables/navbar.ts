import { ref } from 'vue';

export function useNavbar(initialValue = false) {
    const searchBox = ref(initialValue);
    const toggleSearch = () => {
        searchBox.value = !searchBox.value;
    };

    return {
        searchBox,
        toggleSearch,
    };
}