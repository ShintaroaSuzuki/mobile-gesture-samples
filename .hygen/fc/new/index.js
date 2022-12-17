module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: "select",
                name: "component_type",
                message: "コンポーネントのタイプを選択してください",
                choices: ["components", "screens", "navigations"],
            },
            {
                type: "input",
                name: "component_name",
                message: "コンポーネント名を入力してください",
            },
        ];
        return inquirer.prompt(questions).then((answers) => {
            let { component_type, component_name } = answers;
            if (/^[a-z].+$/g.test(component_name[0])) {
                component_name =
                    component_name[0].toLowerCase() + component_name.slice(1);
            }
            const abs_path = `src/${component_type}/${component_name}`;
            return { ...answers, abs_path };
        });
    },
};
