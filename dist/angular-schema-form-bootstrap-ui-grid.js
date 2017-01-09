;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular-schema-form'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular-schema-form'));
  } else {
    root.angularSchemaFormUIGrid = factory(root.schemaForm);
  }
}(this, function(schemaForm) {
angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/ui-grid/ui-grid.html","<div gm-ui-grid=\"form\" class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !form.title}\"\r\n                   ng-if=\"form.title !== form.key[0]\" for=\"{{form.key.slice(-1)[0]}}\">\r\n                {{form.title}}\r\n                <i ng-hide=\"form.readonly\" ng-hide=\"!vm.gridOptions.data.length\" class=\"fa fa-undo clickable\"\r\n                   aria-hidden=\"true\" ng-click=\"vm.reset()\"></i>\r\n            </label>\r\n            <span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n            <div class=\"col-md-7 row\">\r\n            </div>\r\n            <div class=\"tooltip-mark col-sm-1\">\r\n                           <span ng-if=\"form.tooltip.content != null && form.tooltip.content != \'\'\"\r\n                                 class=\"glyphicon glyphicon-question-sign clickable\"\r\n                                 ng-attr-tooltip-trigger=\"outsideClick\"\r\n                                 ng-attr-tooltip-placement=\"{{form.tooltip.position}}\"\r\n                                 ng-attr-uib-tooltip=\"{{form.tooltip.content}}\"></span>\r\n            </div>\r\n            <div class=\"help-block col-sm-3\" style=\"height: 43px;\" sf-message=\"form.description\"></div>\r\n            <div class=\"col-sm-1\">\r\n                           <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\"\r\n                                 ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\r\n                                 aria-hidden=\"true\"></span>\r\n                <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">\r\n                                   {{ hasSuccess() ? \'(success)\' : \'(error)\' }}\r\n                               </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 file-upload\">\r\n            <div id=\"grid1\" ui-grid=\"vm.gridOptions\" class=\"grid\" ng-if=\"vm.gridOptions.data.length\">\r\n            </div>\r\n            <div grid-data ng-show=\"!vm.gridOptions.data.length\" ng-model=\"$$value$$\" schema-validate=\"form\"\r\n                 sf-changed=\"form\"\r\n                 name=\"{{form.key.slice(-1)[0]}}\" class=\"well well-sm bg-white mb\">\r\n                <div ng-include=\"\'upload.html\'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 row\">\r\n            <div class=\"row well well-sm bg-white mb\">\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"btn btn-block\"\r\n                       href=\"https://s3.amazonaws.com/diap.prod.us-east-1.datavault-portal-resource/Custom%20Feed%20Template.xlsx\"\r\n                       target=\"_blank\">Download Template</a>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <a class=\"btn btn-block\" ng-click=\"showTemplateInstructions()\">View Template Instructions</a>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <button ng-disabled=\"form.readonly\" class=\"btn btn-block\" type=\"button\" ng-click=\"vm.reset()\">\r\n                        Reset\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<script type=\"text/ng-template\" id=\"upload.html\">\r\n    <div fileread ngf-drop=\"selectFile(gridFile)\" ngf-select=\"selectFile(gridFile)\" opts=\"vm.gridOptions\" type=\"file\"\r\n         ngf-multiple=\"false\" name=\"gridFile\"\r\n         ng-attr-ngf-pattern=\"{{ form.schema.pattern && form.schema.pattern.mimeType ? form.schema.pattern.mimeType : undefined }}\"\r\n         ng-model=\"gridFile\"\r\n         ng-attr-ngf-max-size=\"{{ form.schema.maxSize && form.schema.maxSize.maximum ? form.schema.maxSize.maximum : undefined }}\"\r\n         ng-required=\"form.required\"\r\n         accept=\"{{ form.schema.pattern && form.schema.pattern.mimeType }}\" ng-model-options=\"form.ngModelOptions\"\r\n         ngf-drag-over-class=\"dragover\"\r\n         class=\"drop-box dragAndDropDescription\" ng-protection-key=\"form.protectionKey\">\r\n        <p class=\"text-center\">Drag file or click to upload</p>\r\n    </div>\r\n    <div ngf-no-file-drop>{{ \'modules.upload.dndNotSupported\' }}</div>\r\n    <button fileread ngf-select=\"selectFile(gridFile)\" type=\"file\" ngf-multiple=\"false\" opts=\"vm.gridOptions\"\r\n            name=\"gridFile\"\r\n            ng-attr-ngf-pattern=\"{{ form.schema.pattern && form.schema.pattern.mimeType ? form.schema.pattern.mimeType : undefined }}\"\r\n            ng-model=\"gridFile\"\r\n            ng-attr-ngf-max-size=\"{{ form.schema.maxSize && form.schema.maxSize.maximum ? form.schema.maxSize.maximum : undefined }}\"\r\n            ng-required=\"form.required\" accept=\"{{ form.schema.pattern && form.schema.pattern.mimeType}}\"\r\n            ng-model-options=\"form.ngModelOptions\"\r\n            id=\"fileInputButton\" class=\"btn btn-primary btn-block {{ form.htmlClass }} mt-lg mb\"\r\n            ng-protection-key=\"form.protectionKey\">\r\n        <fa fw=\"fw\" name=\"upload\" class=\"mr-sm\"></fa>\r\n        Add\r\n    </button>\r\n</script>");}]);
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular-schema-form'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('angular-schema-form'));
    } else {
        root.angularSchemaFormUiGrid = factory(root.schemaForm);
    }
}(this, function (schemaForm) {
    angular.module("schemaForm").run([
        "$templateCache", function ($templateCache) {
            $templateCache.put('directives/decorators/ui-grid/ui-grid.html',
                '<div gm-ui-grid="form" class="form-group schema-form-{{form.type}} {{form.htmlClass}}" ' +
                '     ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }">' +
                '   <div class="row">' +
                '       <div class="col-md-2">' +
                '           <label class="control-label {{form.labelHtmlClass}}" ng-class="{\'sr-only\': !form.title}"' +
                '                  ng-if="form.title !== form.key[0]" for="{{form.key.slice(-1)[0]}}">' +
                '               {{form.title}}' +
                '               <i ng-hide="form.readonly" ng-hide="!vm.gridOptions.data.length" class="fa fa-undo clickable" aria-hidden="true" ng-click="vm.reset()"></i>' +
                '           </label>' +
                '           <span ng-if="form.fieldAddonLeft" class="input-group-addon" ng-bind-html="form.fieldAddonLeft"></span>' +
                '       </div>' +
                '       <div class="col-md-10">' +
                '           <div class="col-md-7 row">' +
                '           </div>' +
                '           <div class="tooltip-mark col-sm-1">' +
                '               <span ng-if="form.tooltip.content != null && form.tooltip.content != \'\'" class="glyphicon glyphicon-question-sign clickable" ' +
                '                     ng-attr-tooltip-trigger="outsideClick" ng-attr-tooltip-placement="{{form.tooltip.position}}" ng-attr-uib-tooltip="{{form.tooltip.content}}"></span>' +
                '           </div>' +
                '           <div class="help-block col-sm-3" style="height: 43px;" sf-message="form.description"></div>' +
                '           <div class="col-sm-1">' +
                '               <span ng-if="form.feedback !== false" class="form-control-feedback"' +
                '                     ng-class="evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }" aria-hidden="true"></span>' +
                '               <span ng-if="hasError() || hasSuccess()" id="{{form.key.slice(-1)[0] + \'Status\'}}" class="sr-only">' +
                '                   {{ hasSuccess() ? \'(success)\' : \'(error)\' }}' +
                '               </span>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="row">' +
                '       <div class="col-md-12 file-upload">' +
                '           <div id="grid1" ui-grid="vm.gridOptions" class="grid" ng-if="vm.gridOptions.data.length">' +
                '           </div>' +
                '           <div grid-data ng-show="!vm.gridOptions.data.length" ng-model="$$value$$" schema-validate="form" sf-changed="form"' +
                '                name="{{form.key.slice(-1)[0]}}" class="well well-sm bg-white mb">' +
                '               <div ng-include="\'upload.html\'"></div>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '   <div class="row">' +
                '       <div class="col-md-12 row">' +
                '           <div class="row well well-sm bg-white mb">' +
                '               <div class="col-md-4">' +
                '                   <a class="btn btn-block" href="https://s3.amazonaws.com/diap.prod.us-east-1.datavault-portal-resource/Custom%20Feed%20Template.xlsx" target="_blank">Download Template</a>' +
                '               </div>' +
                '               <div class="col-md-4">' +
                '                   <a class="btn btn-block" ng-click="showTemplateInstructions()">View Template Instructions</a>' +
                '               </div>' +
                '               <div class="col-md-4">' +
                '                   <button ng-disabled="form.readonly" class="btn btn-block" type="button" ng-click="vm.reset()">Reset</button>' +
                '               </div>' +
                '           </div>' +
                '       </div>' +
                '   </div>' +
                '</div>' +
                '<script type="text/ng-template" id="upload.html">' +
                '   <div fileread ngf-drop="selectFile(gridFile)" ngf-select="selectFile(gridFile)" opts="vm.gridOptions" type="file" ngf-multiple="false" name="gridFile"' +
                '        ng-attr-ngf-pattern="{{ form.schema.pattern && form.schema.pattern.mimeType ? form.schema.pattern.mimeType : undefined }}" ng-model="gridFile"' +
                '        ng-attr-ngf-max-size="{{ form.schema.maxSize && form.schema.maxSize.maximum ? form.schema.maxSize.maximum : undefined }}" ng-required="form.required"' +
                '        accept="{{ form.schema.pattern && form.schema.pattern.mimeType }}" ng-model-options="form.ngModelOptions" ngf-drag-over-class="dragover"' +
                '        class="drop-box dragAndDropDescription" ng-protection-key="form.protectionKey">' +
                '       <p class="text-center">Drag file or click to upload</p>' +
                '   </div>' +
                '   <div ngf-no-file-drop>{{ \'modules.upload.dndNotSupported\' }}</div>' +
                '   <button fileread ngf-select="selectFile(gridFile)" type="file" ngf-multiple="false" opts="vm.gridOptions" name="gridFile"' +
                '           ng-attr-ngf-pattern="{{ form.schema.pattern && form.schema.pattern.mimeType ? form.schema.pattern.mimeType : undefined }}" ng-model="gridFile"' +
                '           ng-attr-ngf-max-size="{{ form.schema.maxSize && form.schema.maxSize.maximum ? form.schema.maxSize.maximum : undefined }}"' +
                '           ng-required="form.required" accept="{{ form.schema.pattern && form.schema.pattern.mimeType}}" ng-model-options="form.ngModelOptions"' +
                '           id="fileInputButton" class="btn btn-primary btn-block {{ form.htmlClass }} mt-lg mb" ng-protection-key="form.protectionKey">' +
                '       <fa fw="fw" name="upload" class="mr-sm"></fa>' +
                '       Add' +
                '   </button>' +
                '</script>'
            );
        }
    ]);

    angular.module('schemaForm').controller('gridController', [
        '$scope', '$modal', 'gridService',
        function ($scope, $modal, gridService) {
            $scope.$parent.vm = this;

            $scope.$parent.vm.gridOptions = {
                enableColumnMenus: false,
                enableColumnResizing: true,
                data: [],
                columnDefs: [],
                minWidth: 300
            };

            $scope.$watch(function () {
                return gridService.gridData;
            }, function (newValue) {
                $scope.$parent.vm.gridOptions.data = (newValue) ? newValue : [];
            });

            $scope.$parent.vm.reset = function () {
                $scope.$parent.vm.gridOptions.data = [];
                $scope.$parent.vm.gridOptions.columnDefs = [];
                $scope.$parent.vm.gridOptions.enableColumnMenus = false;
                $scope.$parent.vm.gridOptions.enableColumnResizing = true;
                $scope.$parent.vm.gridOptions.minWidth = 300;
                $scope.ngModel = undefined;
            }

            $scope.$parent.showTemplateInstructions = function () {
                $modal({
                    scope: $scope,
                    templateUrl: 'templates/modals/template-instructions.tpl.html',
                    show: true,
                    animation: "am-fade-and-scale",
                    placement: "center",
                    title: "Custom Feed Schema Template Instructions",
                    html: true
                });
            };
        }
    ]);

    angular.module('schemaForm').directive('gmUiGrid', [
        function () {
            return {
                restrict: 'A',
                controller: "gridController"
            }
        }
    ]);

    angular.module('schemaForm').factory('gridService', [
        function () {
            var gridServiceFactory = {};
            var validations = {};
            var gridData = null;
            var protectionKey = null;
            var gridKey = null;

            function searchScopesWithProperty(scope, properties) {
                if (!properties) return null;
                var props = properties.split('.');
                if (scope.hasOwnProperty(props[0])) {
                    return scope;
                } else if (scope.$parent) {
                    return searchScopesWithProperty(scope.$parent, properties);
                } else {
                    return null;
                }
            }

            function evalInScope(scope, property) {
                var scp = searchScopesWithProperty(scope, property);
                return (scp) ? scp.$eval(property) : null;
            }

            gridServiceFactory.validations = validations;
            gridServiceFactory.gridData = gridData;
            gridServiceFactory.protectionKey = protectionKey;
            gridServiceFactory.gridKey = gridKey;
            gridServiceFactory.searchScopesWithProperty = searchScopesWithProperty;
            gridServiceFactory.evalInScope = evalInScope;

            return gridServiceFactory;
        }
    ]);

    angular.module('schemaForm').directive('gridData', ['gridService',
        function (gridService) {
            return {
                restrict: 'A',
                scope: { ngModel: '=' },
                require: '^ngModel',
                link: function ($scope, $element, $attrs, ngModel) {
                    gridService.gridData = $scope.ngModel;

                    $scope.$watch(function () {
                        return gridService.gridData;
                    }, function (newValue) {
                        ngModel.$setViewValue((newValue) ? newValue : undefined);
                        ngModel.$commitViewValue();
                        if (newValue) $scope.validate();
                    });

                    $scope.validate = function () {
                        if (ngModel) {
                            var form = $scope.$parent.$eval($attrs.schemaValidate);
                            // We set the viewValue to trigger parsers,
                            // since modelValue might be empty and validating just that
                            // might change an existing error to a "required" error message.
                            if (ngModel.$setDirty) {

                                // Angular 1.3+
                                ngModel.$setDirty();
                                ngModel.$setViewValue(ngModel.$viewValue);
                                ngModel.$commitViewValue();

                                // In Angular 1.3 setting undefined as a viewValue does not trigger parsers
                                // so we need to do a special required check. Fortunately we have $isEmpty
                                if (form.required && !ngModel.$modelValue.length) {
                                    ngModel.$setValidity('tv4-302', false);
                                }


                                for (var key in gridService.validations) {
                                    ngModel.$setValidity(key, gridService.validations[key]);
                                }

                                ngModel.$setValidity('tv4-500', gridService.protectionKey && gridService.gridKey && gridService.gridKey === gridService.protectionKey);

                            } else {
                                // Angular 1.2
                                // In angular 1.2 setting a viewValue of undefined will trigger the parser.
                                // hence required works.
                                ngModel.$setViewValue(ngModel.$viewValue);
                            }
                        }
                    }

                    $scope.$on('schemaFormValidate', $scope.validate);
                }
            }
        }
    ]);

    angular.module('schemaForm').directive('fileread', ['gridService', '$http', 'ngAuthSettings', function (gridService, $http, ngAuthSettings) {
        return {
            restrict: 'A',
            scope: {
                opts: '=',
                ngModel: '=',
                ngProtectionKey: '='
            },
            //scope: true,
            require: '^ngModel',
            link: function ($scope, $element, $attrs, ngModel) {
                var columnDefinitions = gridService.searchScopesWithProperty($scope, 'form.columnDefinitions')['form']['columnDefinitions'];
                gridService.protectionKey = gridService.evalInScope($scope, $attrs.ngProtectionKey) ? "51e78d6835f0eafd0d3dd768eb3d2fcc36e8d0b6edc9e060436a6adf664429d4" : null;

                if (columnDefinitions) {
                    $scope.opts.columnDefs = [];
                    for (var i in columnDefinitions) {
                        var columnDefinition = columnDefinitions[i];
                        var key = columnDefinition.name;
                        var displayName = columnDefinition.displayName;
                        $scope.opts.columnDefs.push({ field: key, name: key, displayName: displayName, width: displayName.length * 10, headerCellClass: 'grid-align' });
                    }

                    if ($scope.ngModel) {
                        var data = [];
                        for (var j in $scope.ngModel) {
                            var elt = $scope.ngModel[j];
                            var dataElt = {};
                            for (var i in columnDefinitions) {
                                var columnDefinition = columnDefinitions[i];
                                var key = columnDefinition.name;
                                if (elt.hasOwnProperty(key)) {
                                    dataElt[key] = columnDefinition.conversionFromObject(columnDefinition.type, elt[key]);
                                }
                            }

                            data.push(dataElt);
                        }
                        $scope.opts.data = data;
                    }
                }

                $scope.validate = function () {
                    if (ngModel && ngModel.$setDirty) {
                        ngModel.$setValidity('required', true);
                    }
                }

                $scope.$on('schemaFormValidate', $scope.validate);

                $scope.$parent.selectFile = function (file) {
                    if (!file) return;

                    var reader = new FileReader();

                    reader.onload = function (evt) {
                        $scope.$apply(function () {
                            for (var i in columnDefinitions) {
                                var columnDefinition = columnDefinitions[i];
                                if (columnDefinition.hasOwnProperty('validation')) {
                                    for (var key in columnDefinition.validation) {
                                        gridService.validations[key] = true;
                                    }
                                }
                            }

                            // Parse the data
                            // This is not perfect, but it doesn't rely anymore on the header name
                            var sheetData = [];
                            var modelValue = [];

                            // Previous method: use XLSX to parse the file on Javascript side
                            //var data = evt.target.result;
                            //var workbook = XLSX.read(data, { type: 'binary' });
                            //var sheet = workbook.Sheets[workbook.SheetNames[0]];
                            // var startingChar = 'A';
                            
                            // New method: Upload to API
                            var formData = new FormData();
                            formData.append("file", file);
                            $http.post(
                                ngAuthSettings.resourceApiServiceBaseUri + 'excel/extract_template',
                                formData,
                                {
                                    headers: {
                                        'Content-Type': undefined
                                    },
                                    transformRequest: angular.identity
                            })
                            .success(function (data) {
                                    var startingChar = 'a';
                                var sheet = data;
                                var aCode = startingChar.charCodeAt();
                                var endCode = aCode + columnDefinitions.length;
                                for (var rowNumber = 2; sheet.hasOwnProperty(startingChar + rowNumber) ; rowNumber++) {
                                    var sheetRow = {};
                                    var modelObj = {};
                                    for (var column = aCode; column < endCode; column++) {
                                        var value = sheet.hasOwnProperty(String.fromCharCode(column) + rowNumber) ? sheet[String.fromCharCode(column) + rowNumber].v : null;
                                        var index = column - aCode;
                                        var columnDefinition = columnDefinitions[index];
                                        sheetRow[columnDefinition.name] = value;
                                        modelObj[columnDefinition.name] = columnDefinition.conversionToObject(columnDefinition.type, value);
                                        if (modelObj[columnDefinition.name] == null && columnDefinition.hasOwnProperty('defaultValue')) {
                                            modelObj[columnDefinition.name] = columnDefinition.defaultValue;
                                        }
                                    }
                                    for (var i in columnDefinitions) {
                                        var columnDefinition = columnDefinitions[i];
                                        if (columnDefinition.hasOwnProperty('validation')) {
                                            for (var key in columnDefinition.validation) {
                                                gridService.validations[key] = gridService.validations[key] && columnDefinition.validation[key](modelObj);
                                            }
                                        }
                                    }
                                    sheetData.push(sheetRow);
                                    modelValue.push(modelObj);
                                }

                                $scope.opts.columnDefs = [];
                                for (var i in columnDefinitions) {
                                    var columnDefinition = columnDefinitions[i];
                                    var key = columnDefinition.name;
                                    var displayName = columnDefinition.displayName;
                                    $scope.opts.columnDefs.push({ field: key, displayName: displayName, width: displayName.length * 10, headerCellClass: 'grid-align' });
                                }

                                $scope.opts.data = sheetData;

                                gridService.gridData = modelValue;
                                if (workbook.Sheets["Version Check"] && workbook.Sheets["Version Check"].B1.v)
                                    gridService.gridKey = workbook.Sheets["Version Check"].B1.v;

                                $element.val(null);
                            })
                            .error(function (data, status) {

                            });
                            
                        });
                    };

                    if (file.size > 20 * 1000 * 1000) {
                        $scope.$apply(function () {
                            ngModel.$setViewValue(undefined);
                            ngModel.$commitViewValue();
                            ngModel.$setValidity('size', false);
                            $element.val(null);
                        });
                    } else {
                        ngModel.$setValidity('size', true);
                        reader.readAsBinaryString(file);
                    }
                };
            }
        }
    }]);

    angular.module('schemaForm').config([
        'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
            var grid = function (name, schema, options) {
                if (schema.type === 'array' && schema.format === 'grid') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.type = 'grid';
                    f.key = options.path;
                    f.columnDefinitions = schema.columnDefinitions;
                    options.lookup[sfPathProvider.stringify(options.path)] = f;

                    return f;
                }
            };

            schemaFormProvider.defaults.array.unshift(grid);

            schemaFormDecoratorsProvider.defineAddOn(
                'bootstrapDecorator',
                'grid',
                'directives/decorators/ui-grid/ui-grid.html'
            );
        }
    ]);
}));

return angularSchemaFormUIGrid;
}));
