module.exports = function (plop) {
  plop.setHelper('capitalize', function (text) {
    text[0].toUpperCase();
    return text;
  });
  plop.setGenerator('domain', {
    description: 'Entity domain generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Entity domain name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}-controller.ts',
        templateFile: 'generate/domain/domain-controller.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}-service.ts',
        templateFile: 'generate/domain/domain-service.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}-adapter.ts',
        templateFile: 'generate/domain/domain-adapter.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}-types.ts',
        templateFile: 'generate/domain/domain-types.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/index.ts',
        templateFile: 'generate/domain/index.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/use{{pascalCase name}}.ts',
        templateFile: 'generate/domain/useCases/useDomain.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/index.ts',
        templateFile: 'generate/domain/useCases/index.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/repository/{{name}}-api-repository.ts',
        templateFile: 'generate/domain/repository/domain-api-repository.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/repository/{{name}}-local-repository.ts',
        templateFile: 'generate/domain/repository/domain-local-repository.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/repository/types.ts',
        templateFile: 'generate/domain/repository/types.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/repository/index.ts',
        templateFile: 'generate/domain/repository/index.hbs',
      },
    ],
  });
};
