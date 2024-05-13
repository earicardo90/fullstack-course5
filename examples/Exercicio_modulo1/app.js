(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    //.controller('DIController', ['$scope', '$filter', DIController]);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {

        $scope.vermelho = false;
        $scope.azul = false;


        $scope.verificar = function (string) {

            string = $scope.entrada

            if ($scope.entrada) {

                // Remove espaços em branco extras e divide a string em um array usando a vírgula como delimitador
                var palavras = string.trim().split(',');

                // Retorna o número de palavras no array resultante
                if (palavras.length <= 3) {

                    $scope.mensagem = "Aproveite";
                    $scope.vermelho = true;

                } else {
                    $scope.mensagem = "Coisas demais";
                    $scope.azul = true;
                }
            }
            console.log("vazio")

        }
    }
})();