module github.com/slackhq/slack-astra-app

go 1.14

require (
	github.com/Masterminds/semver v1.5.0
	github.com/bitly/go-simplejson v0.5.0
	github.com/grafana/grafana-aws-sdk v0.7.0
	github.com/grafana/grafana-plugin-sdk-go v0.138.0
	github.com/smartystreets/goconvey v1.6.4
	github.com/stretchr/testify v1.7.2
	golang.org/x/net v0.0.0-20210614182718-04defd469f4e
)

require github.com/grafana/opensearch-datasource v1.2.0

replace golang.org/x/sys => golang.org/x/sys v0.0.0-20220615213510-4f61da869c0c
