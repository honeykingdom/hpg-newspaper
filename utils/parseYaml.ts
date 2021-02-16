import yaml from "js-yaml";

const parseYaml = (content: string) => yaml.load(content);

export default parseYaml;
