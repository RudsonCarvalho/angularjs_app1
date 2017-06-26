app.run(function ($rootScope) {
    $rootScope.idCliente = -1;
    $rootScope.showSucess = false;
});

app.controller('mainController', function ($scope, $rootScope) {
    $scope.indexMenu = 'home';
    $scope.selMenuClick = function (fIndex) {
        $scope.indexMenu = fIndex;
        $rootScope.showSucess = false;
        if ($rootScope.idCliente > -1) {
            $scope.cliente = $scope.clientes[$rootScope.idCliente];
            console.log($scope.cliente);
          
        }
    }
    $scope.sexo = ['', 'masculino', 'feminino', 'outros'];
    $scope.cliente = {
        nome: ''
        , email: ''
        , endereco: ''
        , sexo: ''
    };



    $scope.clientes = [
        { nome: 'Simone Rabelo', email: 'simone@gratis.com', endereco: 'Av. Paulista', sexo: 'feminino' }
        , { nome: 'Rudson Carvalho', email: 'rudson@gratis.com', endereco: 'Av. Paulista', sexo: 'masculino' }
        , { nome: 'Luiz Silva', email: 'luiz@gratis.com', endereco: '', sexo: 'masculino' }
        , { nome: 'Rute Azevedo', email: 'rute@gratis.com', endereco: '', sexo: 'feminino' }
        , { nome: 'Isabel Ortiz', email: 'isabel@gratis.com.br', endereco: '', sexo: 'feminino' }
    ]


});

app.controller('principalController', function ($scope) {

});

app.controller('pesquisarController', function ($scope, $rootScope) {

    $scope.editarCliente = function (idCliente) {
        $rootScope.idCliente = idCliente;
        console.log(idCliente);
        $scope.selMenuClick('cadastrar');
    };

});

app.controller('cadastrarController', function ($scope, $rootScope) {

    $scope.hideStatus = function () {
        $rootScope.showSucess = false;
    }

    $scope.gravar = function (cliente) {

        if (cliente.nome == "" || cliente.email == "" || cliente.sexo == "") {
            console.log("formulário contem erros");
        } else {
            console.log("formulário ok ");
            if ($rootScope.idCliente > -1) {
                $scope.clientes[$rootScope.idCliente] = angular.copy(cliente);
                $rootScope.idCliente = -1;
            } else {
                $scope.clientes.push(angular.copy(cliente));
            }

            $rootScope.showSucess = true;
            $scope.reset();
            $scope.cadastroForm.$setUntouched();
            console.log("clientes size: " + $scope.clientes.length);
        }

    };

    $scope.reset = function () {
        $scope.cliente.nome = "";
          
            $scope.cliente.email = '';
            $scope.cliente.endereco = '';
            $scope.cliente.sexo = '';
    
    };
});

