import type {LanguageFeatures} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";

export const javascript_features: LanguageFeatures = {
    keywords: "(if|else|export|switch|var|let|const|function|void|while|case|continue|return|async|await| as |true|false)",
}

export const js_example = `
// This is a demo
const test = async () => {
const response = await axios.get(API_URL + "/auth/get_user", { withCredentials: true });
const user = response.data as @@c[UserData];
const success = validate(user);

if (success) {
const nameSplit = user.name.split(" ");
const initials = nameSplit.length > 1 ?
nameSplit[0].charAt(0) + nameSplit[1].charAt(0) :
nameSplit[0].charAt(0) + nameSplit[0].charAt(1);
}
}
`