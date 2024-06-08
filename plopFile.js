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
        path: 'src/domain/{{pascalCase name}}/{{name}}Gateway.ts',
        templateFile: 'generate/domain/domainGateway.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Service.ts',
        templateFile: 'generate/domain/domainService.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Adapter.ts',
        templateFile: 'generate/domain/domainAdapter.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Types.ts',
        templateFile: 'generate/domain/domainTypes.hbs',
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
    ],
  });
};
